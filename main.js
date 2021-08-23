student_name_array = [];
function submit(){
    var display_student_array = [];
    for(i = 1; i<=4; i++){
        var student_name = document.getElementById("name_of_the_student_" + i).value;
        console.log (student_name);
        student_name_array.push(student_name);  
    }
    console.log (student_name_array);
    var length_array = student_name_array.length;
    console.log (length_array);
    for(j = 0; j < length_array; j++){
        display_student_array.push("<h4>NAME- "+ student_name_array[j]+ "</h4>");
        console.log (display_student_array);  
    }
    console.log (display_student_array);
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    var remove_commas = display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}

function sorting(){
    student_name_array.sort();
    console.log (student_name_array);
    var display_sort_array = [];
    var length_array = student_name_array.length;
    console.log (length_array);
    for(j = 0; j < length_array; j++){
        display_sort_array.push("<h4>NAME- "+ student_name_array[j]+ "</h4>");
        console.log (display_sort_array);  
    }
    console.log (display_sort_array);

    var remove_commas = display_sort_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

}

function new_update(){
    document.getElementById("display_name_without_commas").innerHTML = "<h3>" + student_name_array + "</h3>";
}
