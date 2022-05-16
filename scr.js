
$(document).ready(function () {

    var i = 1; // khởi tạo số thứ tự
    // var listStudents = [];

    $("#setButton").click(function(){

        var name = $("#input_name").val();
        var math = $("#math").val();
        var physical = $("#physical").val();
        var chemistry = $("#chemistry").val();

        // var infoStudent = {
        //     id: i,
        //     name: name, 
        //     math: math,
        //     physical: physical,
        //     chemistry: chemistry,
        //     avgScore: (parseFloat(math) + parseFloat(physical) + parseFloat(chemistry)) / 3
        // }
        
        // listStudents.push(infoStudent);

        $("#table__body").append(
        `<tr id = "${i}">
            <td>${i++}</td>
            <td>${name}</td>
            <td>${parseFloat(math)}</td>
            <td>${parseFloat(physical)}</td>
            <td>${parseFloat(chemistry)}</td>
            <td>?</td>
            <td> <button class="btn_delete">xoá</button> </td>
        </tr>`
        );

        resetInput();
    });

    
    // reset ô input sau khi nhập xong
    function resetInput(){        
        $("#input_name").val("");
        $("#math").val("");
        $("#physical").val("");
        $("#chemistry").val("");
    }
    
    //tinh diem trung binh
    $("#GPA").click(function(){

        $("#table__body tr").each(function(){

            // khai báo các biến điểm và gán giá trị lấy đc tương ứng, eq(n) => xđ phần tử ở vị trí thứ n hay có index = n - 1 vì vtri ban đầu là 0
            let math = $(this).find("td").eq(2).html();
            let physical = $(this).find("td").eq(3).html();
            let chemistry = $(this).find("td").eq(4).html();
            let average_point = ((parseFloat(math) + parseFloat(physical) + parseFloat(chemistry)) / 3);

            // đổi ? thành điểm trung bình và làm tròn với toFixed(n): làm tròn tới n chữ số
            $(this).find("td").eq(5).html(average_point.toFixed(1));
        });

    });


    // xác định học sinh giỏi
    $("#Achieve").click(function(){

        $("#table__body tr").each(function(){

            if(parseFloat($(this).find("td").eq(5).html()) >= 8.0){

                $(this).find("td").parent().addClass("bgr_color");

            } else {
                $(this).find("td").parent().removeClass("bgr_color");
            }
        });

    });

    // các hàm nâng cao: 

    // Xoá

    $('#table__body').on("click",".btn_delete",function(){
        $(this).parents("tr").remove(); // this ở đây chỉ phần tử mình click vào (nút có class btn)
        notice();
    })
    
    function notice(){
        alert("Do you want delete?")
    }
});