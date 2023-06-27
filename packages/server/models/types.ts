export interface IComment {
    text: string,
    thread_id: number
}

export interface IMessages {
    text: string,
    topic_id: number
}

export interface IReaction {
    reaction: string,
    message_id: number
}

export interface IReply {
    id_comment: number,
}

export interface IThreads {
    name: string,
    message_id: number
}

export interface ITopicUsers {
    topic_id: number,
    user_id: string,
}

export interface ITopic {
    title: string,
}

export interface IUser {
    name: string,
}
