import '../ProjectCard/style.css'

function CardElement(props) {
  console.log('THIII', props)
  return (
    <>
      <a href={props.website}>
        <div className="card card-creative">
          {props.index === 0 ? (
            <>
              <img
                src={props.id}
                alt={props.description}
                className="card-creative__p5Art-yoda"
                /*             width="800"
            height="800" */
              />
              <div className="content">
                <h6>{props.description}</h6>
              </div>
            </>
          ) : (
            <>
              <iframe
                src={`https://openprocessing.org/sketch/${props.id}/embed/`}
                title="p5.js Art"
                className="card-creative__p5Art"
                /*             width="800"
            height="800" */
              />
              <div className="content">
                <h6>{props.description}</h6>
              </div>
            </>
          )}
        </div>
      </a>
    </>
  )
}

export default CardElement
