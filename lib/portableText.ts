import React from 'react'
import clientConfig from '../client-config'
import BlockContent from '@sanity/block-content-to-react'

const serializers = {
  types: {
    code: props => (
      <pre data - language= { props.node.language } >
      <code>{ props.node.code } < /code>
      < /pre>
    )
  }

const PortableText = ({ blocks }) => (
  <BlockContent blocks= { blocks } serializers = { serializers } />,


)

export default PortableText

