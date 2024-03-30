import { LEETCODE_API } from "@/constants/leetcode";
import axios from "axios";

export const getLeetcode = async () => {
    const response = await axios.get(LEETCODE_API).then(response => response)

    const status = response.status;
    const responseJson = response.data;
    if (status > 400) {
        return { status, data: {} };
    }
    return { status, data: responseJson };
};
