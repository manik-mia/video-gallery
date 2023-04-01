import { useGetVideosQuery } from "../../features/api/apiSlice";
import Video from "./Video";
import VideoLoader from "../ui/loaders/VideoLoader";
import Error from "../ui/Error";
export default function Videos() {
    const { data: videos, isLoading, isError, error } = useGetVideosQuery();
    let content = null;
    if (isLoading && !isError) {
        content = (
            <>
                <VideoLoader />
                <VideoLoader />
                <VideoLoader />
                <VideoLoader />
            </>
        );
    }
    if (!isLoading && isError) {
        content = <Error meaage={error} />;
    }
    if (!isLoading && !isError && videos.length === 0) {
        content = <Error meaage="No Vidoes Found" />;
    }
    if (!isLoading && !isError && videos.length > 0) {
        content = videos.map((video) => <Video key={video.id} video={video} />);
    }
    return <>{content}</>;
}
