<template>
    <v-stage :config="configKonva" class="stage">
        <v-layer>
            <!-- 横线 -->
            <v-line :config="configLine1"></v-line>
            <v-line :config="configLine2"></v-line>
            <v-line :config="configLine3"></v-line>
            <v-line :config="configLine4"></v-line>
            <!-- 竖线 -->
            <v-line :config="configLine5"></v-line>
            <v-line :config="configLine6"></v-line>
            <v-line :config="configLine7"></v-line>
            <v-line :config="configLine8"></v-line>

            <!-- 点对象 -->
            <v-circle :config="configPoint1"></v-circle>
            <v-circle :config="configPoint2"></v-circle>
            <v-circle :config="configPoint3"></v-circle>
            <v-circle :config="configPoint4"></v-circle>
            <v-circle :config="configPoint5"></v-circle>
            <v-circle :config="configPoint6"></v-circle>
            <v-circle :config="configPoint7"></v-circle>
            <v-circle :config="configPoint8"></v-circle>
            <v-circle :config="configPoint9"></v-circle>
            <v-circle :config="configPoint10"></v-circle>
            <v-circle :config="configPoint11"></v-circle>
            <v-circle :config="configPoint12"></v-circle>
            <v-circle :config="configPoint13"></v-circle>
            <v-circle :config="configPoint14"></v-circle>
            <v-circle :config="configPoint15"></v-circle>
            <v-circle :config="configPoint16"></v-circle>
        </v-layer>
    </v-stage>
</template>
<script>
export default {
    data() {
        return {
            configKonva: {
                width: 8000,
                height: 8000
            },
        
            configLine1: {
                x: 250,
                y: 150,
                points: [0, 0, 450, 0],
                stroke: 'black',
                tension: 0
            },
            configLine2: {
                x: 250,
                y: 300,
                points: [0, 0, 450, 0],
                stroke: 'black',
                tension: 0
            },
            configLine3: {
                x: 250,
                y: 450,
                points: [0, 0, 450, 0],
                stroke: 'black',
                tension: 0
            },
            configLine4: {
                x: 250,
                y: 600,
                points: [0, 0, 450, 0],
                stroke: 'black',
                tension: 0
            },
            configLine5: {
                x: 250,
                y: 150,
                points: [0, 0, 0, 450],
                stroke: 'black',
                tension: 0
            },
            configLine6: {
                x: 400,
                y: 150,
                points: [0, 0, 0, 450],
                stroke: 'black',
                tension: 0
            },
            configLine7: {
                x: 550,
                y: 150,
                points: [0, 0, 0, 450],
                stroke: 'black',
                tension: 0
            },
            configLine8: {
                x: 700,
                y: 150,
                points: [0, 0, 0, 450],
                stroke: 'black',
                tension: 0
            },
            // 点对象的配置
            configPoint1: {
                x: 250, // 点的x坐标
                y: 150, // 点的y坐标
                radius: 5, // 点的半径
                fill: 'red', // 填充颜色
            },
            configPoint2: {
                x: 250, // 点的x坐标
                y: 250, // 点的y坐标
                radius: 5, // 点的半径
                fill: 'red', // 填充颜色
            },
            configPoint3: {
                x: 250, // 点的x坐标
                y: 400, // 点的y坐标
                radius: 5, // 点的半径
                fill: 'red', // 填充颜色
            },
            configPoint4: {
                x: 250, // 点的x坐标
                y: 550, // 点的y坐标
                radius: 5, // 点的半径
                fill: 'red', // 填充颜色
            },
            configPoint5: {
                x: 100, // 点的x坐标
                y: 150, // 点的y坐标
                radius: 5, // 点的半径
                fill: 'red', // 填充颜色
            },
            configPoint6: {
                x: 100, // 点的x坐标
                y: 150, // 点的y坐标
                radius: 5, // 点的半径
                fill: 'red', // 填充颜色
            },
            configPoint7: {
                x: 400, // 点的x坐标
                y: 150, // 点的y坐标
                radius: 5, // 点的半径
                fill: 'red', // 填充颜色
            },
            configPoint8: {
                x: 550, // 点的x坐标
                y: 150, // 点的y坐标
                radius: 5, // 点的半径
                fill: 'red', // 填充颜色
            },
            configPoint9: {
                x: 100, // 点的x坐标
                y: 250, // 点的y坐标
                radius: 5, // 点的半径
                fill: 'red', // 填充颜色
            },
            configPoint10: {
                x: 400, // 点的x坐标
                y: 250, // 点的y坐标
                radius: 5, // 点的半径
                fill: 'red', // 填充颜色
            },
            configPoint11: {
                x: 550, // 点的x坐标
                y: 250, // 点的y坐标
                radius: 5, // 点的半径
                fill: 'red', // 填充颜色
            },
            configPoint12: {
                x: 100, // 点的x坐标
                y: 400, // 点的y坐标
                radius: 5, // 点的半径
                fill: 'red', // 填充颜色
            },
            configPoint13: {
                x: 250, // 点的x坐标
                y: 400, // 点的y坐标
                radius: 5, // 点的半径
                fill: 'red', // 填充颜色
            },
            configPoint14: {
                x: 400, // 点的x坐标
                y: 400, // 点的y坐标
                radius: 5, // 点的半径
                fill: 'red', // 填充颜色
            },
            configPoint15: {
                x: 550, // 点的x坐标
                y: 400, // 点的y坐标
                radius: 5, // 点的半径
                fill: 'red', // 填充颜色
            },
            configPoint16: {
                x: 100, // 点的x坐标
                y: 550, // 点的y坐标
                radius: 5, // 点的半径
                fill: 'red', // 填充颜色
            },
        };
    }
};

</script>
<style>
.stage {
    position: absolute;

}
</style>