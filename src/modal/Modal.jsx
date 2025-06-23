import './modal.css'

const Modal = ({
  title,
  content,
  styles,
  onClose // function setting state
}) => {
  return (
    <div className='hrnetsm-blocker'>
      <div className="hrnetsm-modal" style={styles}>
        <h2>{title}</h2>
        {content}
        <a href="#" onClick={onClose} className="hrnetsm-close-modal" title='close modal'>x</a>
      </div>
    </div>
  )
}
export default Modal
