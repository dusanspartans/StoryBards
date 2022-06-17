






const ContentItem = ({props}) => {
    return (
        <div>
            <p>RestartTime : {props.pm2_env.restart_time}</p>
            <p>CreatedAt : {props.pm2_env.created_at}</p>
        </div>
    )
}


export default ContentItem;

