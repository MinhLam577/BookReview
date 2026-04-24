import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function convertToTimeAgo(dateString: string) {
    return dayjs(dateString).fromNow();
}
