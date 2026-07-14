type MdNode = {
  type?: string;
  value?: string;
  children?: MdNode[];
  data?: {
    hName?: string;
    hProperties?: Record<string, unknown>;
  };
};

type MediaType = 'screenshot' | 'video' | 'diagram' | 'media';

function getStrongLabel(node: MdNode): string | null {
  if (node.type !== 'paragraph' || !node.children?.length) {
    return null;
  }

  const firstChild = node.children[0];
  if (firstChild.type !== 'strong' || !firstChild.children?.length) {
    return null;
  }

  return firstChild.children
    .filter((child) => child.type === 'text' && child.value)
    .map((child) => child.value)
    .join('')
    .trim()
    .toLowerCase();
}

function getMediaType(node: MdNode): MediaType | null {
  const label = getStrongLabel(node);

  if (label === 'screenshot space:' || label === 'screenshot suggestion:') {
    return 'screenshot';
  }

  if (label === 'video space:' || label === 'video suggestion:') {
    return 'video';
  }

  if (label === 'diagram space:' || label === 'diagram suggestion:') {
    return 'diagram';
  }

  if (label === 'media:') {
    return 'media';
  }

  return null;
}

export default function remarkMediaPlaceholder() {
  return (tree: MdNode) => {
    const walk = (node: MdNode) => {
      const mediaType = getMediaType(node);

      if (mediaType) {
        node.data = {
          ...(node.data ?? {}),
          hName: 'div',
          hProperties: {
            ...(node.data?.hProperties ?? {}),
            className: [
              'wamule-media-placeholder',
              `wamule-media-placeholder--${mediaType}`,
            ],
            role: 'figure',
            'data-media-type': mediaType,
            'aria-label': `${mediaType} training-media placeholder`,
          },
        };
      }

      node.children?.forEach(walk);
    };

    walk(tree);
  };
}
