
import { db } from '../config/config'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import React from 'react'

interface TestHookProps {}

const TestHook: React.FC<TestHookProps> = () => {
   

  return (
    <div>
      <h2>teste</h2>
    </div>
  )
}

export default TestHook
