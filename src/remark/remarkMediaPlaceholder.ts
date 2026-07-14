type MdNode = {
  type?: string;
  value?: string;
  children?: MdNode[];
  data?: {
    hName?: string;
    hProperties?: Record<string, unknown>;
  };
};

function isMediaParagraph(node: MdNode): boolean {
  if (node.type !== 'paragraph' || !node.children?.length) {
    return false;
  }

  const firstChild = node.children[0];
  if (firstChild.type !== 'strong' || !firstChild.children?.length) {
    return false;
  }

  return firstChild.children.some(
    (child) => child.type === 'text' && child.value?.trim().toLowerCase() === 'media:',
  );
}

export default function remarkMediaPlaceholder() {
  return (tree: MdNode) => {
    const walk = (node: MdNode) => {
      if (isMediaParagraph(node)) {
        node.data = {
          ...(node.data ?? {}),
          hName: 'div',
          hProperties: {
            ...(node.data?.hProperties ?? {}),
            className: ['wamule-media-placeholder'],
            role: 'figure',
            'aria-label': 'Training screenshot or walkthrough placeholder',
          },
        };
      }

      node.children?.forEach(walk);
    };

    walk(tree);
  };
}
