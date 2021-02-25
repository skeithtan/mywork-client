import moment from "moment";

export const isSearchMatch = (keyword, candidate) =>
    candidate.toLowerCase().includes(keyword.trim().toLowerCase());

export const momentizeCourse = course => ({
    ...course,
    deadline: moment(course.deadline),
    date_created: moment(course.date_created)
});

export const momentizeDeliverable = deliverable => ({
    ...deliverable,
    deadline: moment(deliverable.deadline),
    date_created: moment(deliverable.date_created)
});

export const momentizeSubmission = submission => ({
    ...submission,
    date_submitted: submission.date_submitted && moment(submission.date_submitted),
    deliverable: submission.deliverable && momentizeDeliverable(submission.deliverable)
});

export const onClickEmail = email => () => {
    window.open(`mailto:${email}`, "_self");
};