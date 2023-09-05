export const tableMixins = {
    created () {
        if (this.findPage) {
            this.findPage()
        }
    },
    data() {
        return {
            page: 1,
            rows: 10,
            total: 0
        }
    },
    methods: {
        onSearch() {
            this.page = 1
            this.findPage()
        },
        handleSizeChange (val) {
            this.rows = val
            this.findPage()
        },
        handleCurrentChange (val) {
            this.page = val
            this.findPage()
        }
    }
}