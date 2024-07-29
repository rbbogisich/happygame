let plantedCount = 0; // Счетчик для отслеживания количества посаженных растений

document.getElementById('plantButton').addEventListener('click', plantSeeds);
document.getElementById('harvestButton').addEventListener('click', harvest);

function plantSeeds() {
    // Создание растения
    const field = document.getElementById('field');
    const plant = document.createElement('div');
    plant.className = 'plant';
    plant.style.left = `${Math.random() * 100}%`; // Случайное положение растения
    field.appendChild(plant);

    plantedCount++; // Увеличиваем счетчик
    document.getElementById('status').innerText = `Вы посадили семена! Всего посажено растений: ${plantedCount}`;
}

function harvest() {
    if (plantedCount === 0) {
        document.getElementById('status').innerText = 'Нет урожая для сбора!';
        return;
    }

    // Убираем все растения
    const field = document.getElementById('field');
    while (field.firstChild) {
        field.removeChild(field.firstChild);
    }

    plantedCount = 0; // Сбрасываем счетчик
    document.getElementById('status').innerText = 'Вы собрали урожай!';
}
