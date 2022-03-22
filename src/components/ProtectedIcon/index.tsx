import { IconPropsSVG } from '../../types'
import { getColorSchema } from '../../utils/getColorSchema'

const ProtectedIcon = ({ color = 'slate', h = 20, w = 20 }: IconPropsSVG) => {
  return (
    <div className={getColorSchema(color)}>
      <svg
        width={`${w}`}
        height={`${h}`}
        viewBox="0 0 16 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 7V5C13 2.2 10.8 0 8 0C5.2 0 3 2.2 3 5V7C1.3 7 0 8.3 0 10V17C0 18.7 1.3 20 3 20H13C14.7 20 16 18.7 16 17V10C16 8.3 14.7 7 13 7ZM5 5C5 3.3 6.3 2 8 2C9.7 2 11 3.3 11 5V7H5V5ZM9.1 13.5L9 13.6V15C9 15.6 8.6 16 8 16C7.4 16 7 15.6 7 15V13.6C6.4 13 6.3 12.1 6.9 11.5C7.5 10.9 8.4 10.8 9 11.4C9.6 11.9 9.7 12.9 9.1 13.5Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

export default ProtectedIcon
