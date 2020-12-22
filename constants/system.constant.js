/**
 * Limit
 */
const LimitLength = {
  pwdMin: 4,
  pwdMax: 30,
  accMin: 6,
  accMax: 30,
  emailMin: 10,
  emailMax: 60
}

/**
 * Gender
 */
const Gender = {
  _Male: 0,
  _Female: 1
}

/**
 * Mockup
 */
const Mockup = {
  _thientran: "5f0cf515314a0000d80058f3", // thien.tran
  _game_link: "https://www.facebook.com/groups/hoinhaygame/",
  _game_id: "5f3c68cdcae769416498ea5a", // Epic seven
  _game_icon: "https://res.cloudinary.com/hoinhaygame1/image/upload/v1597793460/mockup/game-mockup_xxgbfm.png",
  _category_id: "5f3d608ec6600f1fd938280f",
  _topic_id: "5f3d33023c4b6a3c583a3ead", // Hướng dẫn
  _topic_icon: "https://res.cloudinary.com/hoinhaygame1/image/upload/v1597844872/mockup/Folder_rfnzxe.png",
  _post_id: "5f3d388917a9d53ae0830c64",
  _post_icon: "https://res.cloudinary.com/hoinhaygame1/image/upload/v1597846988/mockup/1999310_yzd2q0.png",
  _page_first: 1,
  _page_size_max: 20,
  _page_size_default: 6,
  _asc: 1, // tăng dần, cũ nhất 
  _desc: -1, // giảm dần, mới nhất
  _undifined: 'undefined',
  _rate: 5,
}

// -------------------------------------------------------- //
// -------------------------------------------------------- //
// --------------------- STATUS------- -------------------- //
// -------------------------------------------------------- //
// -------------------------------------------------------- //
/**
 * Status USER
 */
const StatusUser = {
  _InActive: 0,
  _InActiveColor: 'default',
  _InActiveText: 'Chưa kích hoạt',

  _Active: 1,
  _ActiveColor: 'success',
  _ActiveText: 'Đang hoạt động'
}

const StatusGame = {
  _Upcoming: 0,
  _UpcomingColor: 'info',
  _UpcomingText: 'Sắp ra mắt',

  _Normal: 1,
  _NormalColor: 'primary',
  _NormalText: 'Đang hoạt động',

  _Hot: 2,
  _HotColor: 'warning',
  _HotText: 'Hot',

  _Disable: 3,
  _DisableColor: 'default',
  _DisableText: 'Bị khóa'
}

const StatusCategory = {
  _InActive: 0,
  _InActiveText: 'Không hoạt động',

  _Active: 1,
  _ActiveText: 'Hoạt động',
}


const StatusPost = {
  _InActive: 0,
  _Active: 1,
  _Hot: 2,
  _Pending: 3,

  _TextInActive: "Ngừng kích hoạt",
  _TextActive: "Hoạt động",
  _TextHot: "Hot",
  _TextPending: "Pending"
}

const StatusComment = {
  _InActive: 0,
  _InActiveText: 'Không hoạt động',

  _Active: 1,
  _ActiveText: 'Hoạt động',
}

const StatusTag = {
  _InActive: 0,
  _InActiveText: 'Không hoạt động',

  _Active: 1,
  _ActiveText: 'Hoạt động',
}

const StatusTopic = {
  _InActive: 0,
  _InActiveText: 'Không hoạt động',

  _Active: 1,
  _ActiveText: 'Hoạt động',
}


// -------------------------------------------------------- //
// -------------------------------------------------------- //
// ----------------------- TYPES -------------------------- //
// -------------------------------------------------------- //
// -------------------------------------------------------- //
const TypeUser = {
  _Client: 0,
  _ClientColor: 'default',
  _ClientText: 'Website',

  _Portal: 1,
  _PortalColor: 'success',
  _PortalText: 'Portal'
}

const TypeCategory = {
  _Normal: 0,
  _Fixed: 1
}

const TypeTopic = {
  _Normal: 0,
  _Fixed: 1
}

const Pinned = {
  _Unpin: 0,
  _UnpinText: 'Không gim',

  _Pin: 1,
  _PinText: 'Đã gim',
}

module.exports = {
  URL,
  Mockup, LimitLength,Gender,
  StatusCategory, TypeCategory,
  StatusComment,
  StatusGame,
  StatusPost,
  StatusUser, TypeUser,
  StatusTopic, TypeTopic,
  StatusTag, 
  Pinned
}
