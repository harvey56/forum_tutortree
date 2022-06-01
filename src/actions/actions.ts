
export function addInput(text: {id: number, votes: number, comment: string, pseudonym: string, type: string, title?: string}) {
    return { type: 'UPDATE_COMMENTS_LIST', payload: { id: text.id, votes: text.votes, comment: text.comment, pseudonym: text.pseudonym, type: text.type, title: text.title } }
  }

export function resetForm() {
    return { type: 'RESET_FORM' }
}

export function handleModalPost(value: boolean) {
    return { type: 'HANDLE_MODAL_POST', payload: value}
}

export function handleModalReply(value: boolean) {
    return { type: 'HANDLE_MODAL_REPLY', payload: value}
}

export function upvote(comment_id: number) {
    return { type: 'UPVOTE_COMMENT', payload: comment_id}
}

export function downvote(comment_id: number) {
    return { type: 'DOWNVOTE_COMMENT', payload: comment_id}
}