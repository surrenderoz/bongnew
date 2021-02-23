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
                            <h5 class="m-b-10">Music Manager</h5>
                        </div>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#"><i class="feather icon-home"></i></a></li>
                            <li class="breadcrumb-item"><a href="#!">add music</a></li>
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
                        <h5>Music information</h5>
                    </div>
                    <div class="card-body">
                        <form method="post" @submit.prevent="pushData">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group fill">
                                        <label class="floating-label" for="fname">Title</label>
                                        <input type="text" class="form-control" id="fname" v-model="title" required>
                                    </div>
                                </div>
                                <div class="file-loading">
    <input id="input-20" type="file">
</div>

                                <div class="form-group col-sm-6">
                                        <select class="form-control" id="exampleFormControlSelect1" v-model="electcategory">
                                            <option v-for="(cat, index) in category" :key="index" :value="cat.id">{{cat.title}}</option>
                                        </select>
                                </div>
                                <div class="form-group col-sm-6">
                                        <select class="form-control" id="exampleFormControlSelect1" v-model="electgenre" required>
                                            <option v-for="(gen, i) in genre" :key="i" :value="gen.id">{{gen.title}}</option>
                                        </select>
                                </div>
                                <div class="col-sm-12">
                                <div class="form-group">
                                        <label for="awards">Description</label>
                                        <textarea class="form-control" id="awards" rows="3" placeholder="Tell Me about song " v-model="description" required></textarea>
                                </div>
                                </div>
                                <div class="col-sm-12">
                                <div class="form-group">
                                        <label for="awards">Lyrics</label>
                                        <textarea class="form-control" id="awards" rows="3" placeholder="Tell Me Song Lyrics" v-model="lyrics" required></textarea>
                                </div>
                                </div>
                                    <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Cover Image</span>
                                    </div>
                                    <!-- <div class="custom-file">
                                        <input
                                        type="file"
                                        class="custom-file-input"
                                        @change="handleFile"
                                        id="inputGroupFile01"
                                        required
                                        />
                                        <label class="custom-file-label" for="inputGroupFile01"
                                        >Choose Cover Picture</label
                                        >
                                    </div> -->
                                    <input type="file" name="file" hidden @change="handleFile">
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
<button hidden id="succeed" type="button" class="btn btn-success sweet-success has-ripple">Music Added To Database<span class="ripple ripple-animate" style="height: 90.8281px; width: 90.8281px; animation-duration: 0.7s; animation-timing-function: linear; background: rgb(255, 255, 255); opacity: 0.4; top: -20.4063px; left: 3.20313px;"></span></button>
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
      title: '',
      description: '',
      coverimg: null,
      lyrics: '',
      electgenre: {},
      electcategory: {},
      genre: [],
      category: [],
      index: 0
    }
  },
  methods: {
    handleFile (event) {
      this.coverimg = event.target.files[0]
      console.log(event.target.files[0])
    },
    pushData () {
      const formData = new FormData()
      formData.append('title', this.title)
      formData.append('description', this.description)
      formData.append('lyrics', this.lyrics)
      formData.append('coverimg', this.coverimg)
      formData.append('categories', this.electedcategory)
      formData.append('musicgenre', this.electedgenre)
      getApi.post('/music',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(res => {
        const succeed = document.getElementById('succeed')
        succeed.click()
      })
        .catch(error => {
          console.log({
            error,
            'error response': error.response
          })
          const ozz = document.getElementById('formerros')
          ozz.click()
        })
    }
  },
  mounted () {
    getApi.get('/music'
    ).then(res => {
      console.log(res.data.genre)
      this.category = res.data.category
      this.genre = res.data.genre
    })
      .catch(error => {
        console.log({
          error,
          'error response': error.response
        })
      })
  }
}
</script>
