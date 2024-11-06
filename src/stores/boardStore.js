import { defineStore } from "pinia";

export const useBoardStore = defineStore('boardStore', {
    state: () => ({
        boards: [
            {
                "id": 1,
                "boardName": "Platform Launch",
                "column": ["TODO", "IN PROGRESS", "DONE", "TEST"],
                "tasks": [
                    {
                        "id": 1,
                        "title": "Build UI for onboarding flow",
                        "subtask": {
                                "id": 1,
                                "title": "Sign-up page",
                                "status": "TODO"
                        },
                        "status": "TODO"
                    }
                ]
            },
            {
                "id": 2,
                "boardName": "Fix Bugs",
                "column": ["TODO", "IN PROGRESS", "DONE"],
                "tasks": [
                    {
                        "id": 1,
                        "title": "Build UI for onboarding flow",
                        "subtask": {
                                "id": 1,
                                "title": "Sign-up page",
                                "status": "TODO"
                        },
                        "status": "DONE"
                    }
                ]
            }
        ]
    }),

    actions: {
        createBoard(board) {
            this.boards.push(board);
        }
    }
});