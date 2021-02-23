<template>
  <Header />
  <div class="pcoded-main-container">
    <div class="pcoded-content">
      <!-- [ breadcrumb ] start -->
      <div class="page-header">
        <div class="page-block">
          <div class="row align-items-center">
            <div class="col-md-12">
              <div class="page-header-title">
                <h5 class="m-b-10">Artist Manager</h5>
              </div>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#"><i class="feather icon-home"></i></a>
                </li>
                <li class="breadcrumb-item"><a href="#!">artists</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- [ breadcrumb ] end -->
      <div class="row">
        <div class="col-lg-12">
          <div class="card user-profile-list">
            <div class="card-body">
              <div class="dt-responsive table-responsive">
                <table id="user-list-table" class="table nowrap">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>website</th>
                      <th>genre</th>
                      <th>Label</th>
                      <th>Tags</th>
                      <th>Creaed date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for='(data, index) in artists'
                    :key="index"
                    >
                      <td>
                        <div class="d-inline-block align-middle">
                          <img
                            :src="data.profileimg"
                            alt="user image"
                            class="img-radius align-top m-r-15"
                          />
                          <div class="d-inline-block">
                            <h6 class="m-b-0">{{data.fname}} {{data.lname}}</h6>
                            <p class="m-b-0">{{data.emailid}}</p>
                          </div>
                        </div>
                      </td>
                      <td>{{data.websiteurl}}</td>
                      <td>{{data.genre}}</td>
                      <td >{{data.label}}</td>
                      <td>{{data.tags}}</td>
                      <td>{{data.createdon}}</td>
                      <!-- <td>
                        <span class="badge badge-light-success">{{data.status}}</span>
                        <div class="overlay-edit">
                          <button type="button" class="btn btn-icon btn-success">
                            <i class="feather icon-check-circle"></i>
                          </button>
                          <button type="button" class="btn btn-icon btn-danger">
                            <i class="feather icon-trash-2"></i>
                          </button>
                        </div>
                      </td> -->
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Website</th>
                      <th>Genre</th>
                      <th>Label</th>
                      <th>Creaed date</th>
                      <th>Status</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import { getApi } from '../axios-api'
export default {
  components: {
    Header
  },
  data () {
    return {
      artists: [],
      index: 0
    }
  },
  methods: {
    async getArtist () {
      await getApi.get('showartist')
        .then(response => {
          console.log(response.data)
          this.artists = response.data
        })
    }
  },
  beforeMount () {
    this.getArtist()
  },
  mounted () {
    // datatable Js
    // const dataTables = document.createElement('script')
    // const dataTables2 = document.createElement('script')
    // const dataTables3 = document.createElement('script')
    // dataTables.setAttribute('src', 'assets/js/plugins/jquery.dataTables.min.js')
    // dataTables2.setAttribute('src', 'assets/js/plugins/dataTables.bootstrap4.min.js')
    // dataTables3.setAttribute('src', 'assets/ozz.js')
    // document.body.appendChild(dataTables)
    // document.body.appendChild(dataTables2)
    // document.body.appendChild(dataTables3)
  }
}
</script>
<style>
img{
  height: 50px;
  width: 50px;
  margin: 00px;
}
</style>
