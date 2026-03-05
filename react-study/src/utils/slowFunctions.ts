export function slowFunction(num: number) {
    console.log("임의 계산 실행")
    let result = 0;
    for (let i = 0; i < 500000000; i++) {
        result += num;
    }

    return result;
}
