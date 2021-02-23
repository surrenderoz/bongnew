<template>
    <Header/>
    <div class="pcoded-main-container">
    <div class="pcoded-content">
 <!-- [ breadcrumb ] start -->
        <div class="page-header">
            <div class="page-block">
                <div class="row align-items-center">
                    <div class="col-md-12">
                        <div class="page-header-title">
                            <h5 class="m-b-10">tags Manager</h5>
                        </div>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#"><i class="feather icon-home"></i></a></li>
                            <li class="breadcrumb-item"><a href="#!">add tags</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- [ breadcrumb ] end -->

    <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>tags information</h5>
                    </div>
                    <div class="card-body">
                        <form method="post" @submit.prevent="pushData">
                            <div class="row">
                                <div class="col-sm-3">
                                    <div class="form-group fill">
                                        <label class="floating-label" for="">Name</label>
                                        <input type="text" class="form-control" id="" v-model="setData.title" required>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="form-group fill">
                                        <label class="floating-label" for="">Description</label>
                                        <input type="text" class="form-control" id="" v-model="setData.description" required>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="form-group fill">
                                        <div class="custom-file">
                                        <input
                                        type="file"
                                        class="custom-file-input"
                                        @change="handleFile"
                                        id="inputGroupFile01"
                                        required
                                        />
                                        <label class="custom-file-label" for="inputGroupFile01"
                                        >Choose Picture</label
                                        >
                                    </div>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="form-group fill">
                                       <button type="submit" class="btn btn-primary col-sm-4">
                                        Save
                                        </button>
                                    </div>
                                </div>
                                    </div>
                         </form>
                    </div>
                </div>
            </div>
        </div>
         <div class="row">
        <div class="col-lg-12">
          <div class="card user-profile-list">
            <div class="card-body">
              <div class="dt-responsive table-responsive">
                <table id="user-list-table" class="table nowrap">
                  <thead>
                    <tr>
                      <th>tags Image</th>
                      <th>tags Name</th>
                      <th>tags Description</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for='(data, index) in categories'
                    :key="index"
                    >
                    <td>
                        <div class="d-inline-block align-middle">
                          <img
                            :src="data.image"
                            alt="cat image"
                            class="img-radius align-top m-r-15"
                            style="max-width: 30px"
                          />
                        </div>
                      </td>
                    <td>{{data.title}}</td>
                      <td>{{data.description}}</td>
                      <td>
                        <span class="badge badge-light-success"></span>
                        <div class="overlay-edit">
                          <!-- <button type="button" class="btn btn-icon btn-success">
                            <i class="feather icon-check-circle"></i>
                          </button> -->
                          <button type="button" class="btn btn-icon btn-danger">
                            <i class="feather icon-trash-2"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>tags Image</th>
                      <th>tags Name</th>
                      <th>tags Description</th>
                      <th>tags Action</th>
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
<!-- custom for adding something -->
<button hidden id="succeed" type="button" class="btn btn-success sweet-success has-ripple">Artist Added To Database<span class="ripple ripple-animate" style="height: 90.8281px; width: 90.8281px; animation-duration: 0.7s; animation-timing-function: linear; background: rgb(255, 255, 255); opacity: 0.4; top: -20.4063px; left: 3.20313px;"></span></button>
<button hidden id="formerros" type="button" class="btn btn-danger sweet-error has-ripple">Error<span class="ripple ripple-animate" style="height: 73.3906px; width: 73.3906px; animation-duration: 0.7s; animation-timing-function: linear; background: rgb(255, 255, 255); opacity: 0.4; top: -10.6875px; left: -22.0469px;"></span></button>
</template>

<script>
import Header from '../components/Header'
import { getApi } from '../axios-api.js'
export default {
  components: {
    Header
  },
  data () {
    return {
      setData: {
        title: '',
        image: null,
        description: ''
      },
      categories: null
    }
  },
  methods: {
    success () {
      console.log('suceess')
    },
    handleFile (event) {
      this.setData.image = event.target.files[0]
      console.log(event.target.files[0])
    },
    pushData () {
      const formData = new FormData()
      formData.append('title', this.setData.title)
      formData.append('image', this.setData.image)
      formData.append('description', this.setData.description)
      getApi.post('/tags',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(res => {
        const succeed = document.getElementById('succeed')
        succeed.click()
        this.getCategories()
      })
        .then(res => {
          this.setData = ''
        })
        .catch(error => {
          console.log({
            error,
            'error response': error.response
          })
          const ozz = document.getElementById('formerros')
          ozz.click()
        })
    },
    async getCategories () {
      await getApi.get('/tags',
        {
          headers: {
            'Content-type': 'image/jpeg'
          }
        }
      ).then(res => {
        this.categories = res.data
      })
    }
  },
  mounted () {
    this.getCategories()
    const sweetalert = document.createElement('script')
    const sweetalert2 = document.createElement('script')

    // sweet alert Js
    sweetalert.setAttribute('src', 'assets/js/plugins/sweetalert.min.js')
    sweetalert2.setAttribute('src', 'assets/js/pages/ac-alert.js')

    document.body.appendChild(sweetalert)
    document.body.appendChild(sweetalert2)
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
