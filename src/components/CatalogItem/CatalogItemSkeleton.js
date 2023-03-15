import React from 'react'
import ContentLoader from 'react-content-loader'

export function CatalogItemSkeleton(props) {
  return (
    <ContentLoader
      speed={1}
      width={200}
      height={300}
      viewBox="0 0 200 300"
      backgroundColor="#f0f0f0"
      foregroundColor="#e8e8e8"
      {...props}
    >
      <rect x="20" y="24" rx="31" ry="31" width="156" height="151" />
      <rect x="22" y="200" rx="2" ry="2" width="120" height="10" />
      <rect x="22" y="220" rx="2" ry="2" width="110" height="10" />
      <rect x="22" y="244" rx="2" ry="2" width="43" height="10" />
      <rect x="74" y="244" rx="2" ry="2" width="34" height="10" />
    </ContentLoader>
  )
}
