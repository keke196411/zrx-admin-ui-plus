<template>
    <div>
        <div class="m-y-20 font-bold f-16">基础用法</div>
        <el-table :data="tableData">
            <el-table-column label="用户名" prop="loginName" show-overflow-tooltip fixed="left"></el-table-column>
            <el-table-column prop="name" label="姓名" width="200" show-overflow-tooltip></el-table-column>
            <el-table-column prop="orgName" label="所属机构" show-overflow-tooltip></el-table-column>
            <el-table-column prop="createName" label="创建人" show-overflow-tooltip></el-table-column>
            <el-table-column prop="createTime" label="创建时间" sortable show-overflow-tooltip></el-table-column>
        </el-table>
        <div class="m-y-20 font-bold f-16">可多选</div>
        <el-table :data="tableData">
            <el-table-column type="selection" width="40px" fixed="left"></el-table-column>
            <el-table-column label="用户名" prop="loginName" show-overflow-tooltip fixed="left"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="orgName" label="所属机构" show-overflow-tooltip></el-table-column>
            <el-table-column prop="createName" label="创建人" show-overflow-tooltip></el-table-column>
            <el-table-column prop="createTime" label="创建时间" show-overflow-tooltip></el-table-column>
        </el-table>
        <div class="m-y-20 font-bold f-16">固定列</div>
        <el-table :data="tableData">
            <el-table-column label="用户名" prop="loginName" width="150px" show-overflow-tooltip fixed="left"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="orgName" label="所属机构" show-overflow-tooltip width="400px"></el-table-column>
            <el-table-column prop="createName" label="创建人" show-overflow-tooltip width="400px"></el-table-column>
            <el-table-column prop="createTime" label="创建时间" show-overflow-tooltip width="400px"></el-table-column>
            <el-table-column prop="createTime" label="创建时间" show-overflow-tooltip width="400px"></el-table-column>
            <el-table-column label="操作" width="300" fixed="right">
                <template #default="{ row }">
                    <el-button link type="primary"> 关联角色 </el-button>
                    <el-button link type="primary"> 关联用户组 </el-button>
                    <el-button link type="primary"> 应用授权 </el-button>
                </template>
            </el-table-column>
        </el-table>

        <div class="m-y-20 font-bold f-16">多级</div>
        <el-table :data="tableData1" row-key="id" default-expand-all>
            <el-table-column prop="date" label="Date" />
            <el-table-column prop="name" label="Name" />
            <el-table-column prop="address" label="Address" />
        </el-table>

        <div class="m-y-20 font-bold f-16">可展开</div>
        <el-table :data="tableData2">
            <el-table-column type="expand">
                <template #default="props">
                    <div class="p-x-12">
                        <div class="lh-24px">State: {{ props.row.state }}</div>
                        <div class="lh-24px">City: {{ props.row.city }}</div>
                        <div class="lh-24px">Address: {{ props.row.address }}</div>
                        <div class="lh-24px">Zip: {{ props.row.zip }}</div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="Date" prop="date" />
            <el-table-column label="Name" prop="name" />
        </el-table>
    </div>
</template>

<script setup>
const tableData = [
    {
        id: '38c8f09d3d3744d0181250eb3e3cefb5',
        loginName: '10137-2',
        name: '王小二',
        accountStatus: '1',
        isManager: '0',
        expiredTime: null,
        orgName: '芜湖市',
        createName: 'admin_test',
        createTime: '2022-02-22 13:43:28'
    },
    {
        id: '339d8c9a6c535c50907a917558a4d979',
        loginName: '10100',
        name: 'wangh',
        accountStatus: '1',
        isManager: '0',
        expiredTime: null,
        orgName: '芜湖市',
        createName: 'admin_test',
        createTime: '2023-12-21 15:13:40'
    },
    {
        id: '177755acf610996d91333f1ee93dc04b',
        loginName: '10086',
        name: '10086',
        accountStatus: '1',
        isManager: '0',
        expiredTime: null,
        orgName: '香洲区',
        createName: 'admin_test',
        createTime: '2022-10-21 09:14:53'
    }
]

const tableData1 = [
    {
        id: 1,
        date: '2016-05-02',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        id: 2,
        date: '2016-05-04',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        id: 3,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
        children: [
            {
                id: 31,
                date: '2016-05-01',
                name: 'wangxiaohu',
                address: 'No. 189, Grove St, Los Angeles'
            },
            {
                id: 32,
                date: '2016-05-01',
                name: 'wangxiaohu',
                address: 'No. 189, Grove St, Los Angeles'
            }
        ]
    },
    {
        id: 4,
        date: '2016-05-03',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles'
    }
]

const tableData2 = [
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
        family: [
            {
                name: 'Jerry',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Spike',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Tyke',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            }
        ]
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
        family: [
            {
                name: 'Jerry',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Spike',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Tyke',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            }
        ]
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
        family: [
            {
                name: 'Jerry',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Spike',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Tyke',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            }
        ]
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
        family: [
            {
                name: 'Jerry',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Spike',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Tyke',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            }
        ]
    },
    {
        date: '2016-05-08',
        name: 'Tom',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
        family: [
            {
                name: 'Jerry',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Spike',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Tyke',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            }
        ]
    },
    {
        date: '2016-05-06',
        name: 'Tom',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
        family: [
            {
                name: 'Jerry',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Spike',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Tyke',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            }
        ]
    },
    {
        date: '2016-05-07',
        name: 'Tom',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
        family: [
            {
                name: 'Jerry',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Spike',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            },
            {
                name: 'Tyke',
                state: 'California',
                city: 'San Francisco',
                address: '3650 21st St, San Francisco',
                zip: 'CA 94114'
            }
        ]
    }
]
</script>
