import axios from "axios";
import { GITHUB_ACCOUNTS } from "../constants/github";
import { fetcher } from "./fetcher";
import { LEETCODE_API } from "../constants/leetcode";

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
export const getLeetcode = async () => {
  const response = await axios.get(LEETCODE_API).then(response => response)

  const status = response.status;
  const responseJson = response.data;
  if (status > 400) {
    return { status, data: {} };
  }


  return { status, data: responseJson };
};
