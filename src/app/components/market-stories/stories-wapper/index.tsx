import React from 'react'

const StoriesWrapper = () => {
  return (
    <div className="shadow-md rounded-lg overflow-hidden my-2">
        <img
          src="https://res.cloudinary.com/dlxpf7d8c/image/upload/v1710851691/q3dxudgdmx1v5darr1fs.jpg"
          alt=""
        />
        <div className="p-5">
          <h3 className="font-bold text-sm text-x-accent-base">
            Reckitt Benckiser's Litigation Risks Remains Unclear
          </h3>
          <h5 className="text-xs text-x-sky-blue font-bold mt-2">Mar 19, 202417:49 GMT+5:30</h5>
          <p className="text-xs font-medium text-x-accent-light/80 mt-2">
            The consumer-goods company has multiple legal options, including its
            current position to contest and appeal against any rulings, the
            analysts say.
          </p>
        </div>
      </div>
  )
}

export default StoriesWrapper