import type {ReactNode} from 'react';

export function Boundary({children}: {children: ReactNode}) {
  return <div className="wamule-callout wamule-boundary"><strong>Operational boundary</strong><div>{children}</div></div>;
}

export function TrainingMedia({children}: {children: ReactNode}) {
  return <div className="wamule-callout wamule-media"><strong>Training media requirement</strong><div>{children}</div></div>;
}

export function VerifyLive({children}: {children: ReactNode}) {
  return <div className="wamule-callout wamule-verify"><strong>Verify before live use</strong><div>{children}</div></div>;
}
