import Photos from "../components/Photos";

function Main() {
    return (
        <Photos method="getAll" limit="100" title="Рекомендации"/>
    );
}

export default Main;