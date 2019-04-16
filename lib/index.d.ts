import * as React from 'react';

export interface ClampLinesProps {
  text: string
  lines?: number
  ellipsis?: string
  buttons?: boolean
  moreText?: string
  lessText?: string
  className?: string
  delay?: number
  stopPropagation?: boolean
}

declare class ClampLines extends React.Component {}

export default ClampLines
