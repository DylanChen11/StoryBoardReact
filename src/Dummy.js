const initialData = {
    tasks: {
        // 'task1': {id: 'task1', content:'DATA Synch', points: 2, stage: 'PROD'},
        // 'task2': {id: 'task2', content:'DB2 vs DL/1', points: 3, stage: 'PROD'},
        // 'task3': {id: 'task3', content:'MFAE010', points: 5, stage: 'SYSTEST'}, 
        // 'task4': {id: 'task4', content:'MFAE020', points: 8, stage: 'SYSTEST'},
        // 'task5': {id: 'task5', content:'MFAE030', points: 3, stage: 'SYSTEST'},
        // 'task6': {id: 'task6', content:'MFAE040', points: 3, stage: 'SYSTEST'},
        // 'task7': {id: 'task7', content:'D2MFCUPD', points: 8, stage: 'In Progress'},
        // 'task8': {id: 'task8', content:'PFCK400', points: 5, stage: 'In Progress'},
        // 'task9': {id: 'task9', content:'PFCK100', points: 5, stage: 'In Progress'},
        // 'task10': {id: 'task10', content:'PFCK200', points: 5, stage: 'To Do'},
        // 'task11': {id: 'task11', content:'PFCKADR', points: 5, stage: 'To Do'},
        // 'task12': {id: 'task12', content:'PFCKDA2', points: 5, stage: 'To Do'},
        // 'task13': {id: 'task13', content:'TFCFRO', points: 5, stage: 'To Do'},
        // 'task14': {id: 'task14', content:'TFCREO', points: 5, stage: 'To Do'},
        // 'task15': {id: 'task15', content:'TFCLAE', points: 5, stage: 'To Do'},
        // 'task16': {id: 'task16', content:'Phase 2', points: 122, stage: 'To Do'},
        // 'task17': {id: 'task17', content:'Phase 3', points: 0, stage: 'To Do'},
    },
    columns: {
        'column1':{
            id: 'column1',
            //filtered : [],
            title: 'To Do',
            // taskIds: ['task10', 'task11', 'task12', 'task13', 'task14', 'task15', 'task16', 'task17']
        },
        'column2':{
            id: 'column2',
            title: 'In Progress',
            //taskIds: [],
            //filtered : []
        },
        'column3':{
            id: 'column3',
            title: 'SYSTEST',
           // taskIds: ['task3', 'task4', 'task5', 'task6'],
            //filtered : []
        },
        'column4':{
            id: 'column4',
            title: 'PROD',
            //taskIds: ['task1', 'task2'],
            //filtered : []
        },
        'column5':{
            id: 'column5',
            title: 'Done',
            // taskIds: [],
            // filtered : []
        }
    },
    columnOrder: ['column1','column2','column3','column4','column5']
}

export default initialData;