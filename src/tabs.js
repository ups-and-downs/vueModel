export default [{
	id:1,
	name:'基础数据',
	icon:'fa-desktop',
	path:'/app/base',
	children:[{
		id:11,
		path:'school',
		name:'校园信息'
	},{
		id:12,
		path:'grade',
		name:'年级管理'
	},{
		id:13,
		path:'clazz',
		name:'班级管理'
	},{
		id:14,
		path:'course',
		name:'课程管理'
	},{
		id:14,
		path:'teacher',
		name:'教师管理'
	}]
},{
	id:2,
	name:'问卷管理',
	icon:'fa-book',
	path:'/app/questionnaire',
	children:[{
		id:21,
		path:'question',
		name:'题库管理'
	},{
		id:22,
		path:'list',
		name:'问卷管理'
	}]
},{
	id:3,
	name:'课调管理',
	icon:'fa-leanpub',
	path:'/app/survey',
	children:[{
		id:31,
		path:'list',
		name:'新建课调'
	},{
		id:32,
		path:'monitor',
		name:'课调监控'
	}]
},{
	id:4,
	name:'课调统计',
	icon:'fa-linux',
	path:'/app/statistics',
	children:[{
		id:41,
		path:'list',
		name:'列表统计'
	},{
		id:42,
		path:'course',
		name:'课程课调统计'
	},{
		id:43,
		path:'clazz',
		name:'班级课调统计'
	},{
		id:44,
		path:'teacher',
		name:'讲师课调统计'
	}]
},{
	id:6,
	name:'系统管理',
	icon:'fa-cog',
	path:'/app/system',
	children:[{
		id:61,
		path:'taocanManger',
		name:'用户管理'
	}]
}]