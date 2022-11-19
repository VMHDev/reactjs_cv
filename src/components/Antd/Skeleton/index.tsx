import React from 'react';
import { Skeleton } from 'antd';
import { SkeletonStyled } from './styled';

interface AntdSkeletonProps extends React.ComponentProps<typeof Skeleton> {
  loading: boolean;
  className?: string;
  rows?: number;
}

const AntdSkeleton = (props: AntdSkeletonProps) => {
  const { loading, className = '', rows = 4, ...rest } = props;
  return (
    <SkeletonStyled
      className={className}
      loading={loading}
      active
      paragraph={{ rows: rows }}
      {...rest}
    />
  );
};

export default AntdSkeleton;
