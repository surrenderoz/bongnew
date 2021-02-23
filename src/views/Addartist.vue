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
                            <h5 class="m-b-10">Artist Manager</h5>
                        </div>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#"><i class="feather icon-home"></i></a></li>
                            <li class="breadcrumb-item"><a href="#!">add artist</a></li>
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
                        <h5>Artist information</h5>
                    </div>
                    <div class="card-body">
                        <form method="post" @submit.prevent="pushData">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group fill">
                                        <label class="floating-label" for="fname">First Name</label>
                                        <input type="text" class="form-control" id="fname" v-model="fname" required>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="floating-label" for="lname">Last Name</label>
                                        <input type="text" class="form-control" id="lname" v-model="lname" required>
                                    </div>
                                </div>
                                <div class="form-group col-sm-6">
                                        <select class="form-control" id="exampleFormControlSelect1" v-model="gender" required>
                                            <option >Male</option>
                                            <option>Female</option>
                                        </select>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="floating-label" for="weburl">BirthDay</label>
                                        <input type="text" name="birthday" class="form-control" v-model="bday" required>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="floating-label" for="weburl">Website Url</label>
                                        <input type="url" class="form-control" id="weburl" v-model="websiteurl" required>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="floating-label" for="email">Email Address</label>
                                        <input type="email" class="form-control" id="email" v-model="emailid" required>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                <div class="form-group">
                                        <label for="biography">Biography</label>
                                        <textarea class="form-control" id="biography" rows="3" placeholder="tell me more about it" v-model="bio" required></textarea>
                                </div>
                                </div>
                                <div class="col-sm-6">
                                <div class="form-group">
                                        <label for="awards">Awards</label>
                                        <textarea class="form-control" id="awards" rows="3" placeholder="Any Awards " v-model="awards" required></textarea>
                                </div>
                                </div>
                                    <div class="col-sm-3 mb-2">
                                        <h6>Genre</h6>
                                         <multiselect
                                        v-if="options.genreoptions"
                                        mode="tags"
                                        :searchable="true"
                                        multipleLabel="true"
                                        label='title'
                                        v-model="genre"
                                        :options="options.genreoptions"
                                        valueProp="title"
                                        :show-no-results= "false"
                                      ></multiselect>
                                    </div>
                                    <div class="col-sm-3 mb-2">
                                        <h6>Label</h6>
                                         <multiselect
                                         v-if="options.labelsoptions"
                                        mode="tags"
                                        :searchable="true"
                                        multipleLabel="true"
                                        label='title'
                                        v-model="label"
                                        :options="options.labelsoptions"
                                        valueProp="title"
                                        :show-no-results= "false">
                                         </multiselect>
                                    </div>
                                    <div class="col-sm-3 mb-2">
                                        <h6>Profession</h6>
                                         <multiselect
                                        v-if="options.professionoptions"
                                        mode="tags"
                                        :searchable="true"
                                        multipleLabel="true"
                                        label='title'
                                        v-model="profession"
                                        :options="options.professionoptions"
                                        valueProp="title"
                                        trackBy="title"
                                      ></multiselect>
                                    </div>
                                    <div class="col-sm-3 mb-2">
                                        <h6>Tags</h6>
                                        <multiselect
                                        v-if="options.tagsoptions"
                                        mode="tags"
                                        :searchable="true"
                                        multipleLabel="true"
                                        label='title'
                                        v-model="tags"
                                        :options="options.tagsoptions"
                                        valueProp="title"
                                        :show-no-results= "false"
                                      ></multiselect>
                                    </div>
                                    <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Profile</span>
                                    </div>
                                    <div class="custom-file">
                                        <input
                                        type="file"
                                        class="custom-file-input"
                                        @change="handleFile"
                                        id="inputGroupFile01"
                                        required
                                        />
                                        <label class="custom-file-label" for="inputGroupFile01"
                                        >Choose Profile Picture</label
                                        >
                                    </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary col-sm-12">
                                        Save
                                        </button>
                            </div>
                        </form>
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
import Multiselect from '@vueform/multiselect'

import { getApi } from '../axios-api.js'
export default {
  components: {
    Header,
    Multiselect
  },
  props: ['value'],
  data () {
    return {
      fname: '',
      lname: '',
      bday: '05/05/1996',
      gender: 'Male',
      emailid: '',
      bio: '',
      profileimg: null,
      awards: '',
      websiteurl: '',
      genre: [],
      profession: [],
      tags: [],
      label: [],
      options: {
        genreoptions: [],
        professionoptions: [],
        tagsoptions: [],
        labelsoptions: []
      }
    }
  },
  methods: {
    handleFile (event) {
      this.profileimg = event.target.files[0]
      console.log(event.target.files[0])
    },
    async pushData () {
      const formData = new FormData()
      formData.append('fname', this.fname)
      formData.append('lname', this.lname)
      formData.append('bday', this.bday)
      formData.append('emailid', this.emailid)
      formData.append('gender', this.genre)
      formData.append('bio', this.bio)
      formData.append('profileimg', this.profileimg)
      formData.append('awards', this.awards)
      formData.append('websiteurl', this.websiteurl)
      formData.append('genre', this.genre)
      formData.append('profession', this.profession)
      formData.append('tags', this.tags)
      formData.append('label', this.label)
      await getApi.post('/createartist',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(res => {
        const succeed = document.getElementById('succeed')
        succeed.click()

        this.fname = ''
        this.lname = ''
        this.bday = '05/05/1996'
        this.gender = 'Male'
        this.emailid = ''
        this.bio = ''
        this.profileimg = null
        this.awards = ''
        this.websiteurl = ''
        this.genre = []
        this.profession = []
        this.tags = []
        this.label = []
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
    async getBasic () {
      await getApi.get('/createartist',
        {
          headers: {
            'Content-type': 'image/jpeg'
          }
        }
      )
        .then(res => {
          console.log('first', res.data.genre)
          this.options.genreoptions = res.data.genre
          this.options.professionoptions = res.data.profession
          this.options.tagsoptions = res.data.tags
          this.options.labelsoptions = res.data.label
        })
    }
  },
  mounted () {
    // const value = ''
    this.getBasic()
    const moment = document.createElement('script')
    const daterangepicker = document.createElement('script')
    const daterangepickerer = document.createElement('script')
    const sweetalert = document.createElement('script')
    const sweetalert2 = document.createElement('script')

    // data picker Js
    moment.setAttribute('src', 'assets/js/plugins/moment.min.js')
    daterangepicker.setAttribute('src', 'assets/js/plugins/daterangepicker.js')
    daterangepickerer.setAttribute('src', 'assets/js/pages/ac-datepicker.js')

    // sweet alert Js
    sweetalert.setAttribute('src', 'assets/js/plugins/sweetalert.min.js')
    sweetalert2.setAttribute('src', 'assets/js/pages/ac-alert.js')

    document.body.appendChild(moment)
    document.body.appendChild(daterangepicker)
    document.body.appendChild(daterangepickerer)

    document.body.appendChild(sweetalert)
    document.body.appendChild(sweetalert2)
  }
}
</script>
<style src="@vueform/multiselect/themes/default.css"></style>

<style>
.multiselect-tag{
    background: #4680ff!important;
    padding: 7px;
}
</style>
