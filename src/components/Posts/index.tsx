import {useParams} from 'react-router-dom';

export const Posts = () => {
    const params = useParams();
    const {id} = params;


    return(
        <div>
            <h1>Posts {id}</h1>
        </div>
    )
}