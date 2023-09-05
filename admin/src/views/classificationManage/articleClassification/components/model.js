export function tableModel () {
    return [
        {
            label: '序号',
            type: 'index'
        },
        {
            label: '创建时间',
            prop: 'createTime'
        },
        {
            label: '分类名称',
            prop: 'classificationName'
        },
        {
            label: '描述',
            prop: 'describe'
        },
        {
            label: '操作',
            type: 'index'
        },
    ]
}