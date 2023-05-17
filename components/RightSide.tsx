import Link from 'next/link'
import React from 'react'

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <Link href="mailto:obafemiogunmokun@gmail.com">
        <p className="text-lg rotate-90 w-72 tracking-wide text-textGreen">
          Send a message!
        </p>
      </Link>
      <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
    </div>
  );
}

export default RightSide