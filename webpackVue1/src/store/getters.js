const getters = {
    /**
     * accessToken
     */
    accessToken: state => state.accessToken,
    /**
     * 权限资源
     * @param state
     * @return {Array}
     */
    action: state => state.action,
    /**
     * 菜单资源
     * @param state
     * @returns {getters.menu|(function(*))|null|*|Array|mutations.menu}
     */
    menu : state => state.menu,
    /**
     * 当前登录的用户
     * @param user
     * @return {*}
     */
    user:state => state.user,
    /**
     * 当前开启的在线心跳定时器
     * @param loginRestrictionCfg
     * @return {*}
     */
    loginRestrictionCfg:state => state.loginRestrictionCfg,
    /**
     * 系统的ui配置，包括登录控制，打印控制等
     * @param uiSetting
     * @return {*}
     */
    uiSetting:state => state.uiSetting,
    /**
     * 当前顶部高度
     * @param topBarHeight
     * @return {*}
     */
    topBarHeight:state => state.topBarHeight
}
export default getters
