var datas = [],
input_datas = [];

// Input Data
function inputData() {
    // Declare and Pick Value
    let nim = document.getElementById('nim').value,
    nama_mhs = document.getElementById('nama-mhs').value,
    matkul = document.getElementById('matkul').value,
    dospengampu = document.getElementById('dospengampu').value,
    dospengganti = document.getElementById('dospengganti').value,
    tgl_absen = document.getElementById('tgl-absensi').value,
    materi = document.getElementById('materi-kuliah').value;

    if (nim == '' || matkul == '0' || dospengampu == '0' || dospengganti == '0' || tgl_absen == '' || materi == '0') {
        alert('Input Kosong!!');
    } else {
        // localStorage.setItem('nim', nim);
        // localStorage.setItem('nama-mhs', nama_mhs);
        // localStorage.setItem('matkul', matkul);
        // localStorage.setItem('dospengampu', dospengampu);
        // localStorage.setItem('dospengganti', dospengganti);
        // localStorage.setItem('tgl-absen', tgl_absen);
        // localStorage.setItem('materi', materi);
        
        input_datas.push(nim);
        input_datas.push(nama_mhs);
        input_datas.push(matkul);
        input_datas.push(matkul);
        input_datas.push(dospengampu);
        input_datas.push(dospengganti);
        input_datas.push(tgl_absen);
        input_datas.push(materi);
        datas.push(input_datas);
        localStorage.setItem('datas', JSON.stringify(datas));
        input_datas = [];
        alert('Data Berhasil Ditambahkan');
    }

    window.location.replace('index.html');
}

function clearStorage() {
    localStorage.clear();
    window.location.replace('index.html');
}

var data_mhs = JSON.parse(localStorage.getItem("datas"));
document.getElementById('nama-mhs').innerHTML = data_mhs[0][1];
document.getElementById('nim-mhs').innerHTML = data_mhs[0][0];
document.getElementById('dosen-pengampu').innerHTML = data_mhs[0][4];
document.getElementById('dosen-pengganti').innerHTML = data_mhs[0][5];
document.getElementById('matkul-mhs').innerHTML = data_mhs[0][2];

/* Table Absensi */
// 1
document.getElementById('tglAbsen-mhs').innerHTML = data_mhs[0][6];
document.getElementById('materi-mhs').innerHTML = data_mhs[0][7];
