import { FC } from 'react'

import { AwardsContainer as Container } from './styles'

import { AwardsItem } from 'components/awards'
import useCounter from 'hooks/useCounter'

const AwardsContainer: FC = () => {
  const travelerCount = useCounter(350)
  const reviewCount = useCounter(21)
  const planCount = useCounter(649)

  return (
    <Container delay={400}>
      <AwardsItem>
        <strong>{`${travelerCount}만 명`}</strong>의 여행자
      </AwardsItem>
      <AwardsItem>
        <strong>{`${reviewCount}만 개`}</strong>의 여행 리뷰
      </AwardsItem>
      <AwardsItem>
        <strong>{`${planCount}만 개`}</strong>의 여행 일정
      </AwardsItem>
    </Container>
  )
}

export default AwardsContainer
