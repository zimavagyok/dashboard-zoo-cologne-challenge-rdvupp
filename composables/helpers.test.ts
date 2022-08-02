import { describe, expect, test } from 'vitest'

import { faker } from '@faker-js/faker'
import { calculateAgeInYears } from './helpers'

describe('The calculateAgeInYears helper', () => {
  test('handles over 100 years correctly', () => {
    const date = faker.date.between('1800-01-01T00:00:00.000Z', '1900-01-01T00:00:00.000Z')
    expect(calculateAgeInYears(date)).toBeGreaterThanOrEqual(100)
  })

  // For the zookeepers its easier to conservatively assume that an animal is older rather than younger
  test('always rounds up', () => {
    const today = new Date()
    expect(calculateAgeInYears(today)).toBe(1)
  })
})
