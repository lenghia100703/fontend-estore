import { Link } from 'react-router-dom';

export default function HotTag(props) {
    return (
        <>
            <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                    <h4>{props.name}</h4>
                    <ul>
                        {props.tags.map((tag, index) => {
                            return (
                                <li key={index}>
                                    <Link to={tag.to}>{tag.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}
