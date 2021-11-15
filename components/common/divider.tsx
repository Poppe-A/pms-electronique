export default function Divider() {
  return (
    <div>
      <style jsx>
        {`
          div {
            width: 90%;
            border-bottom: solid 1px #b3b3b3;
            margin-block: 30px;
          }
          @media (max-width: 479px) {
            div {
              margin-block: 15px;
            }
          }
        `}
      </style>
    </div>
  )
}

