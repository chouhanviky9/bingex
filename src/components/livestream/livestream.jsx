import './livestream.css';

function LiveStream(props){
    return <div className="livestream">
        <h2>{props.game}</h2>
        <h3>By:{props.name}</h3>
        <button>ADD</button>
    </div>
}

export default LiveStream;