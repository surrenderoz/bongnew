<template>
  <!-- [ navigation menu ] start -->
  <nav class="pcoded-navbar menu-light">
    <div class="navbar-wrapper">
      <div class="navbar-content scroll-div">
        <div class="">
          <div class="main-menu-header">
            <img
              class="img-radius"
              src="assets/logo1.png"
              alt="User-Profile-Image"
            />
            <div class="user-details">
              <div id="more-details">Bong Admin <i class="fa fa-caret-down"></i></div>
            </div>
          </div>
          <div class="collapse" id="nav-user-link">
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="user-profile.html" data-toggle="tooltip" title="View Profile"
                  ><i class="feather icon-user"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a href="email_inbox.html"
                  ><i class="feather icon-mail" data-toggle="tooltip" title="Messages"></i
                  ><small class="badge badge-pill badge-primary">5</small></a
                >
              </li>
              <li class="list-inline-item">
                <a
                  href="auth-signin.html"
                  data-toggle="tooltip"
                  title="Logout"
                  class="text-danger"
                  ><i class="feather icon-power"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <ul class="nav pcoded-inner-navbar">
          <li class="nav-item pcoded-menu-caption">
            <label>Navigation</label>
          </li>
          <li class="nav-item pcoded-hasmenu">
            <a href="#!" class="nav-link"
              ><span class="pcoded-micon"><i class="feather icon-home"></i></span
              ><span class="pcoded-mtext">Artist Manager</span></a
            >
            <ul class="pcoded-submenu">
              <li><router-link to="/addartist">Add Artist</router-link></li>
              <li><router-link to="/artist">Artist List</router-link></li>
            </ul>
          </li>
          <li class="nav-item pcoded-hasmenu">
            <a href="#!" class="nav-link"
              ><span class="pcoded-micon"><i class="feather icon-home"></i></span
              ><span class="pcoded-mtext">Basic Manager</span></a
            >
            <ul class="pcoded-submenu">
              <li><router-link to="/category">Add Category</router-link></li>
              <li><router-link to="/genre">Add Genre</router-link></li>
              <li><router-link to="/profession">Add Profession</router-link></li>
              <li><router-link to="/tags">Add Tags</router-link></li>
              <li><router-link to="/label">Add Labels</router-link></li>
            </ul>
          </li>
          <li class="nav-item pcoded-hasmenu">
            <a href="#!" class="nav-link"
              ><span class="pcoded-micon"><i class="feather icon-home"></i></span
              ><span class="pcoded-mtext">Music Manager</span></a
            >
            <ul class="pcoded-submenu">
              <li><router-link to="/addmusic">Add Music</router-link></li>
            </ul>
          </li>
          </ul>
      </div>
    </div>
  </nav>
  <!-- [ navigation menu ] end -->
  <!-- [ Header ] start -->
  <header class="navbar pcoded-header navbar-expand-lg navbar-light header-blue">
    <div class="m-header">
      <a class="mobile-menu" id="mobile-collapse" href="#!"><span></span></a>
      <a href="#!" class="b-brand">
        <!-- ========   change your logo hear   ============ -->
        <img src="assets/logo1.png" alt="" class="logo" />
      </a>
      <a href="#!" class="mob-toggler">
        <i class="feather icon-more-vertical"></i>
      </a>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="#!" class="pop-search"><i class="feather icon-search"></i></a>
          <div class="search-bar">
            <input
              type="text"
              class="form-control border-0 shadow-none"
              placeholder="Search hear"
            />
            <button type="button" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li>
          <div class="dropdown">
            <a class="dropdown-toggle" href="#" data-toggle="dropdown"
              ><i class="icon feather icon-bell"></i
            ></a>
            <div class="dropdown-menu dropdown-menu-right notification">
              <div class="noti-head">
                <h6 class="d-inline-block m-b-0">Notifications</h6>
                <div class="float-right">
                  <a href="#!" class="m-r-10">mark as read</a>
                  <a href="#!">clear all</a>
                </div>
              </div>
              <ul class="noti-body">
                <li class="n-title">
                  <p class="m-b-0">NEW</p>
                </li>
                <li class="notification">
                  <div class="media">
                    <img
                      class="img-radius"
                      src="assets/images/user/avatar-1.jpg"
                      alt="Generic placeholder image"
                    />
                    <div class="media-body">
                      <p>
                        <strong>John Doe</strong
                        ><span class="n-time text-muted"
                          ><i class="icon feather icon-clock m-r-10"></i>5 min</span
                        >
                      </p>
                      <p>New ticket Added</p>
                    </div>
                  </div>
                </li>
                <li class="n-title">
                  <p class="m-b-0">EARLIER</p>
                </li>
                <li class="notification">
                  <div class="media">
                    <img
                      class="img-radius"
                      src="assets/images/user/avatar-2.jpg"
                      alt="Generic placeholder image"
                    />
                    <div class="media-body">
                      <p>
                        <strong>Joseph William</strong
                        ><span class="n-time text-muted"
                          ><i class="icon feather icon-clock m-r-10"></i>10 min</span
                        >
                      </p>
                      <p>Prchace New Theme and make payment</p>
                    </div>
                  </div>
                </li>
                <li class="notification">
                  <div class="media">
                    <img
                      class="img-radius"
                      src="assets/images/user/avatar-1.jpg"
                      alt="Generic placeholder image"
                    />
                    <div class="media-body">
                      <p>
                        <strong>Sara Soudein</strong
                        ><span class="n-time text-muted"
                          ><i class="icon feather icon-clock m-r-10"></i>12 min</span
                        >
                      </p>
                      <p>currently login</p>
                    </div>
                  </div>
                </li>
                <li class="notification">
                  <div class="media">
                    <img
                      class="img-radius"
                      src="assets/images/user/avatar-2.jpg"
                      alt="Generic placeholder image"
                    />
                    <div class="media-body">
                      <p>
                        <strong>Joseph William</strong
                        ><span class="n-time text-muted"
                          ><i class="icon feather icon-clock m-r-10"></i>30 min</span
                        >
                      </p>
                      <p>Prchace New Theme and make payment</p>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="noti-footer">
                <a href="#!">show all</a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="dropdown drp-user">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="feather icon-user"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right profile-notification">
              <div class="pro-head">
                <img
                  src="assets/images/user/avatar-1.jpg"
                  class="img-radius"
                  alt="User-Profile-Image"
                />
                <span>John Doe</span>
                <a href="auth-signin.html" class="dud-logout" title="Logout">
                  <i class="feather icon-log-out"></i>
                </a>
              </div>
              <ul class="pro-body">
                <li>
                  <a href="user-profile.html" class="dropdown-item"
                    ><i class="feather icon-user"></i> Profile</a
                  >
                </li>
                <li>
                  <a href="email_inbox.html" class="dropdown-item"
                    ><i class="feather icon-mail"></i> My Messages</a
                  >
                </li>
                <li>
                  <a href="auth-signin.html" class="dropdown-item"
                    ><i class="feather icon-lock"></i> Lock Screen</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </header>
  <!-- [ Header ] end -->
</template>
<style>
@import '../assets/css/plugins/dataTables.bootstrap4.min.css';

</style>
<script>
export default {
  beforeMount () {
    const ripple = document.createElement('script')
    const pcoded = document.createElement('script')
    ripple.setAttribute('src', 'assets/js/ripple.js')
    pcoded.setAttribute('src', 'assets/js/pcoded.min.js')
    document.body.appendChild(ripple)
    document.body.appendChild(pcoded)
    const dataTables = document.createElement('script')
    const dataTables2 = document.createElement('script')
    const dataTables3 = document.createElement('script')
    dataTables.setAttribute('src', 'assets/js/plugins/jquery.dataTables.min.js')
    dataTables2.setAttribute('src', 'assets/js/plugins/dataTables.bootstrap4.min.js')
    dataTables3.setAttribute('src', 'assets/ozz.js')
    document.body.appendChild(dataTables)
    document.body.appendChild(dataTables2)
    document.body.appendChild(dataTables3)
  }
}
</script>
