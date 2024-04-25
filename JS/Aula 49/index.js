function recursiva(max) {
    if (max >= 10)return;
    max++;
    recursiva(max);
    console.log(max);
}

recursiva(0); 