import '@testing-library/jest-dom'
import { expect, afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import { render, screen, waitFor, userEvent, createXSSPayload } from './utils'

// Extend Vitest's expect method with Jest DOM matchers
expect.extend(matchers)

// Declare global types
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Vi {
    interface Global {
      render: typeof render;
      screen: typeof screen;
      waitFor: typeof waitFor;
      userEvent: typeof userEvent;
      createXSSPayload: typeof createXSSPayload;
    }
  }
}

// Make test utilities available globally
vi.stubGlobal('render', render)
vi.stubGlobal('screen', screen)
vi.stubGlobal('waitFor', waitFor)
vi.stubGlobal('userEvent', userEvent)
vi.stubGlobal('createXSSPayload', createXSSPayload)

// Clean up after each test case
afterEach(() => {
  cleanup()
}) 