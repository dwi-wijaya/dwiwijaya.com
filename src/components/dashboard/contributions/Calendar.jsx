"use client"
import clsx from "clsx";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
const Calendar = ({ style,data }) => {
    const [selectContribution, setSelectContribution] = useState({
        count: null,
        date: null,
    });

    const weeks = data?.weeks ?? [];
    const months =
        data?.months?.map((month) => {
            const filterContributionDay = weeks
                .filter(
                    (week) => week.firstDay.slice(0, 7) === month.firstDay.slice(0, 7)
                )
                .map((item) => item.contributionDays)
                .flat(1);
            const getContributionsByMonth = filterContributionDay.reduce(
                (previousValue, currentValue) =>
                    previousValue + currentValue.contrisbutionCount,
                0
            );

            return {
                ...month,
                contributionsCount: getContributionsByMonth,
            };
        }) ?? [];

    const contributionColors = data?.colors ?? [];
    const wrapper1Ref = useRef(null);
    const wrapper2Ref = useRef(null);

    const syncScroll = (fromRef, toRef) => {
        if (fromRef.current && toRef.current) {
            toRef.current.scrollLeft = fromRef.current.scrollLeft;
        }
    };
    return (
        <>
            <div className="relative flex flex-col">
                <ul onScroll={() => syncScroll(wrapper1Ref, wrapper2Ref)} ref={wrapper1Ref} className={style['calendar-month']}>
                    {months.map((month) => (
                        <li
                            key={month.firstDay}
                            className={clsx(`${month.totalWeeks < 2 ? style.invisible : ""}`)}
                            style={{ minWidth: 14.3 * month.totalWeeks }}
                        >
                            {month.name}
                        </li>
                    ))}
                </ul>

                <div onScroll={() => syncScroll(wrapper2Ref, wrapper1Ref)} ref={wrapper2Ref} className={style['calendar-grid']}>
                    {weeks?.map((week) => (
                        <div key={week.firstDay}>
                            {week.contributionDays.map((contribution) => {
                                const backgroundColor =
                                    contribution.contributionCount > 0 && contribution.color;

                                const getRandomDelayAnimate =
                                    Math.random() * week.contributionDays.length * 0.15;

                                return (
                                    <motion.span
                                        key={contribution.date}
                                        initial="initial"
                                        animate="animate"
                                        variants={{
                                            initial: { opacity: 0, translateY: -20 },
                                            animate: {
                                                opacity: 1,
                                                translateY: 0,
                                                transition: { delay: getRandomDelayAnimate },
                                            },
                                        }}
                                        className={style['calendar-day']}
                                        style={backgroundColor ? { backgroundColor } : undefined}
                                        onMouseEnter={() =>
                                            setSelectContribution({
                                                count: contribution.contributionCount,
                                                date: contribution.date,
                                            })
                                        }
                                        onMouseLeave={() =>
                                            setSelectContribution({ count: null, date: null })
                                        }
                                    />
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>

            <div className={style['calendar-footer']}>
                <div className={style['calendar-info']}>
                    <span className="">Less</span>
                    <ul className={style['calendar-contribution']}>
                        <motion.li className={style['calendar-day']} />
                        {contributionColors.map((item, index) => (
                            <motion.li
                                key={item}
                                initial="initial"
                                animate="animate"
                                variants={{
                                    initial: { opacity: 0 },
                                    animate: {
                                        opacity: 1,
                                        transition: { delay: index * 0.3 },
                                    },
                                }}
                                className={style['calendar-day']}
                                style={{ backgroundColor: item }}
                            />
                        ))}
                    </ul>
                    <span>More</span>
                </div>
                <div
                    className={clsx(
                        `${selectContribution?.date ? style['opacity-100'] : style['opacity-0']}`,
                        style['detail-contribution']
                    )}
                >
                    {selectContribution?.count != null && (
                        <span className={style.count}>
                            {selectContribution.count}
                        </span>
                    )} contributions on {selectContribution?.date}

                </div>

            </div>
        </>
    );
};

export default Calendar;
