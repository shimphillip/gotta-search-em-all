import React from 'react'
import ReactTooltip from 'react-tooltip'
import { TypeBadge } from '..'
import { typeMaps } from '../../../helpers'

interface TypeItemProps {
  name: string
  size?: string
}

const TypeItem = ({ name, size }: TypeItemProps) => {
  const STRENGTHS = 'strengths'
  const WEAKNESSES = 'weaknesses'
  const IMMUNES = 'immunes'

  const renderList = (name: string, attribute: string) =>
    typeMaps[name][attribute].map((typeName: string) => (
      <TypeBadge name={typeName.toLowerCase()} key={typeName}>
        {typeName}
      </TypeBadge>
    ))

  return (
    <>
      <TypeBadge name={name} data-tip={name} data-for={name} size={size}>
        {name}
      </TypeBadge>
      <ReactTooltip id={name} place="right" effect="float" type="light">
        <ul>
          Strong against:{' '}
          {renderList(name, STRENGTHS).length
            ? renderList(name, STRENGTHS)
            : 'none'}
        </ul>
        <ul>
          Weak against:{' '}
          {renderList(name, WEAKNESSES).length
            ? renderList(name, WEAKNESSES)
            : 'none'}
        </ul>
        <ul>
          Immune against:{' '}
          {renderList(name, IMMUNES).length
            ? renderList(name, IMMUNES)
            : 'none'}
        </ul>
      </ReactTooltip>
    </>
  )
}

export default TypeItem
