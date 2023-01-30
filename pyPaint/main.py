import pygame, sys
from pygame.locals import QUIT

class button():
    def __init__(self, action, rect, color):
        self.action = action
        self.rect = rect
        self.color = color


    def draw_button(self):
        if self.color != None:
            pygame.draw.rect(screen, self.color, self.rect)


    def is_touching(self, mouse_pos):
        if mouse_pos[0] < self.rect[0]: return False
        if mouse_pos[0] > self.rect[0] + self.rect[2]: return False
        if mouse_pos[1] < self.rect[1]: return False
        if mouse_pos[1] > self.rect[1] + self.rect[3]: return False
        return True


class color(): # krāsu klase
    black = (0,0,0)
    dgray = (127,127,127)
    carmine = (136,0,21)
    red = (237,28,36)
    orange = (255,127,39)
    yellow = (255,242,0)
    green = (34,177,76)
    skyblue = (0,162,232)
    blue = (63,72,204)
    purple = (163,73,164)
    white = (255,255,255)
    lgray = (195,195,195)
    brown = (185,122,87)
    pink = (255,174,201)
    carrot = (255,201,14)
    cream = (239,228,176)
    cactus = (181,230,29)
    lblue = (153,217,234)
    cyan = (112,146,190)
    lavander = (200,191,231)


def clear_screen():
	screen.fill(color.white)


def drawLine(z, x1, y1, x2, y2):
    pygame.draw.line(z, paintcolor, (x1-147, y1-21), (x2-147, y2-21), brush_size+6)


def drawCircle(z, x, y):
    pygame.draw.circle(z, paintcolor, (x-147,y-21), brush_size)


def setcolor(color):
    global paintcolor
    paintcolor = color


def paintquit():
    pygame.quit()
    exit()


def imgsave():
    pygame.image.save(bgbg, "saved.png")
    print('Image saved!')


def brushsize(plusminus):
    global brush_size
    if plusminus:
        brush_size += 1
    elif brush_size > 1:
        brush_size -= 1


def erase():
    bgbg.fill(paintcolor)

isPressed = False
paintcolor = color.black
brush_size = 5
pygame.display.set_caption('pyPaint')
icon = pygame.image.load('assets/icon.png')
pygame.display.set_icon(icon)

buttons = []

buttons.append(button(lambda: setcolor(color.white), (33, 33, 33, 33), color.white))
buttons.append(button(lambda: setcolor(color.black), (81, 33, 33, 33), color.black))
buttons.append(button(lambda: setcolor(color.lgray), (33, 81, 33, 33), color.lgray))
buttons.append(button(lambda: setcolor(color.dgray), (81, 81, 33, 33), color.dgray))
buttons.append(button(lambda: setcolor(color.brown), (33, 129, 33, 33), color.brown))
buttons.append(button(lambda: setcolor(color.carmine), (81, 129, 33, 33), color.carmine))
buttons.append(button(lambda: setcolor(color.pink), (33, 177, 33, 33), color.pink))
buttons.append(button(lambda: setcolor(color.red), (81, 177, 33, 33), color.red))
buttons.append(button(lambda: setcolor(color.carrot), (33, 225, 33, 33), color.carrot))
buttons.append(button(lambda: setcolor(color.orange), (81, 225, 33, 33), color.orange))
buttons.append(button(lambda: setcolor(color.cream), (33, 273, 33, 33), color.cream))
buttons.append(button(lambda: setcolor(color.yellow), (81, 273, 33, 33), color.yellow))
buttons.append(button(lambda: setcolor(color.cactus), (33, 321, 33, 33), color.cactus))
buttons.append(button(lambda: setcolor(color.green), (81, 321, 33, 33), color.green))
buttons.append(button(lambda: setcolor(color.lblue), (33, 369, 33, 33), color.lblue))
buttons.append(button(lambda: setcolor(color.skyblue), (81, 369, 33, 33), color.skyblue))
buttons.append(button(lambda: setcolor(color.cyan), (33, 417, 33, 33), color.cyan))
buttons.append(button(lambda: setcolor(color.blue), (81, 417, 33, 33), color.blue))
buttons.append(button(lambda: setcolor(color.lavander), (33, 465, 33, 33), color.lavander))
buttons.append(button(lambda: setcolor(color.purple), (81, 465, 33, 33), color.purple))

buttons.append(button(lambda: paintquit(), (966, 27, 93, 93), None))
buttons.append(button(lambda: imgsave(), (966, 123, 93, 93), None))
buttons.append(button(lambda: brushsize(True), (966, 363, 93, 45), None))
buttons.append(button(lambda: brushsize(False), (966, 411, 93, 45), None))
buttons.append(button(lambda: erase(), (966, 459, 93, 45), None))

pygame.init()
screen = pygame.display.set_mode((1080, 525))
bgbg = pygame.Surface((792,489))
sideBrush = pygame.Surface((81,129))
main_img = pygame.image.load('assets/guidesign.png').convert_alpha()
background_png = pygame.image.load('assets/background.png').convert_alpha()
sideBrush_png = pygame.image.load('assets/sideBrush.png').convert_alpha()
screen.blit(main_img, (0,0))
bgbg.blit(background_png, (0,0))
sideBrush.blit(sideBrush_png, (0,0))


while True:
    (x1, y1) = pygame.mouse.get_pos()
    sideBrush.blit(sideBrush_png, (0,0))
    drawCircle(sideBrush, 187, 87)
    for b in buttons:
        b.draw_button()
    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            sys.exit()
        if event.type == pygame.MOUSEBUTTONDOWN:
            isPressed = True
            for b in buttons:
                if b.is_touching(pygame.mouse.get_pos()): b.action()
        elif event.type == pygame.MOUSEBUTTONUP:
            isPressed = False
        if isPressed == True:
            (x2, y2) = pygame.mouse.get_pos()
            drawLine(bgbg, x1, y1, x2, y2)
            drawCircle(bgbg, x2, y2)
            (x1, y1) = (x2, y2)
    screen.blit(bgbg, (147,21))
    screen.blit(sideBrush, (972, 225))
    pygame.display.flip()