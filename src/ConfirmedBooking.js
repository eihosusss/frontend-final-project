import Conformation from './Assets/booking-confirmed.png'

function ConfirmedBooking () {
    return (
        <div style={{ width: '100%', overflow: 'hidden' }}>
            <img
                src={Conformation}
                alt="Conformation"
                style={{ width: '100%', height: 'auto' }}
            />
        </div>
    );
}

export default ConfirmedBooking;