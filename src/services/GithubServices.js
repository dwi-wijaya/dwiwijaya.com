import axios from "axios";
import { GITHUB_ACCOUNTS } from "@/constants/github";

const GITHUB_USER_ENDPOINT = "https://api.github.com/graphql";

const GITHUB_USER_QUERY = `query($username: String!) {
    user(login: $username) {
        contributionsCollection {
            contributionCalendar {
                colors
                totalContributions
                months {
                    firstDay
                    name
                    totalWeeks
                }
                weeks {
                    contributionDays {
                        color
                        contributionCount
                        date
                    }
                    firstDay
                }
            }
        }
    }
}`;

export const fetchGithubData = async (username, token) => {
    const response = await axios.post(
        GITHUB_USER_ENDPOINT,
        {
            query: GITHUB_USER_QUERY,
            variables: {
                username: username,
            },
        },
        {
            headers: {
                Authorization: `bearer ${token}`,
            },
        }
    );

    const status = response.status;
    const responseJson = response.data;

    if (status > 400) {
        return { status, data: {} };
    }

    return { status, data: responseJson.data.user };
};

export const getGithubUser = async (type) => {
    const account = GITHUB_ACCOUNTS.find(
        (account) => account?.type === type && account?.is_active
    );

    if (!account) {
        throw new Error("Invalid user type");
    }

    const { username, token } = account;
    return await fetchGithubData(username, token);
};
export const getLastCommitDate = async () => {
    const response = await fetch(`https://api.github.com/repos/dwi-wijaya/portfolio-next/commits`);
    const commits = await response.json();
    if (commits && commits.length > 0) {
        return commits[0].commit.author.date;
    }
    return null;
}