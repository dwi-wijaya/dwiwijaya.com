import { GITHUB_ACCOUNTS } from "@/constants/github";
import { LEETCODE_ACCOUNTS } from "@/constants/leetcode";
import axios from "axios";

const LETCODE_USER_QUERY = `query getUserProfile($username: String!) {
    allQuestionsCount {
        difficulty
        count
    }
    matchedUser(username: $username) {
        contributions {
            points
        }
        profile {
            reputation
            ranking
        }
        submissionCalendar
        submitStats {
            acSubmissionNum {
                difficulty
                count
                submissions
            }
            totalSubmissionNum {
                difficulty
                count
                submissions
            }
        }
    }
}`;

export const LEETCODE_API = 'https://leetcode.com/graphql';

export const fetchLeetcodeData = async (username) => {
    const response = await axios.post(
        LEETCODE_API,
        {
            query: LETCODE_USER_QUERY,
            variables: {
                username: username,
            },
        },
    );
    const status = response.status;
    const responseJson = response.data;
    const data = responseJson.data;

    const allQuestions = data.allQuestionsCount;
    const matchedUser = data.matchedUser;
    const submitStats = matchedUser.submitStats;
    const actualSubmissions = submitStats.acSubmissionNum;
    const totalSubmissions = submitStats.totalSubmissionNum;
    // Fill in total counts
    const totalQuestions = allQuestions[0].count;
    const totalEasy = allQuestions[1].count;
    const totalMedium = allQuestions[2].count;
    const totalHard = allQuestions[3].count;
    // Fill in solved counts
    const totalSolved = actualSubmissions[0].count;
    const easySolved = actualSubmissions[1].count;
    const mediumSolved = actualSubmissions[2].count;
    const hardSolved = actualSubmissions[3].count;

    // Fill in etc
    const totalAcceptCount = actualSubmissions[0].submissions;
    const totalSubCount = totalSubmissions[0].submissions;
    let acceptanceRate;
    if (totalSubCount !== 0) {
        acceptanceRate = Math.round((totalAcceptCount / totalSubCount) * 100, 2);
    }
    const contributionPoints = matchedUser.contributions.points;
    const reputation = matchedUser.profile.reputation;
    const ranking = matchedUser.profile.ranking;

    // const submissionCalendarJson = JSON.parse(matchedUser.submissionCalendar);
    // const submissionCalendar = {};

    // for (const timeKey in submissionCalendarJson) {
    //     submissionCalendar[timeKey] = submissionCalendarJson[timeKey];
    // }
    
    const result = {
        totalQuestions,
        totalEasy,
        totalMedium,
        totalHard,
        totalSolved,
        easySolved,
        mediumSolved,
        hardSolved,
        acceptanceRate,
        contributionPoints,
        reputation,
        ranking,
        // submissionCalendar,
    }
    if (status > 400) {
        return { status, data: {} };
    }

    return { status, data: result };
};

export const getLeetcode = async () => {
    const { username } = LEETCODE_ACCOUNTS;
    return await fetchLeetcodeData(username);
};
